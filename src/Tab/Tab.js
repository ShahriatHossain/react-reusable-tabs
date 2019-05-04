import React from 'react';

import { Tab, TabButton, Tabcontent, Title, Description, Wrapper } from './Styles';

const tab = (props) => {
    // generate tabl links
    const tabLinks = props.tabLinks.map(t => {
        const classActive = props.selectedTab === t.name ? 'active' : '';
        return (
            <TabButton key={t.name} className={classActive} onClick={() => props.clickTab(t.name)}>{t.label}</TabButton>
        )
    });

    // tab details by tab clicked
    const tabDetails = props.tabLinks.map(td => {
        const style = td.name === props.selectedTab ? 'block' : 'none';
        let details = '';

        if (!props) return details;

        details = props[td.name]();

        return (
            <Tabcontent key={td.name} style={{ display: style }}>
                {details}
            </Tabcontent>
        )
    })

    return (
        <Wrapper>
            <Title>{props.tabTitle}</Title>
            <Description>{props.tabDescription}</Description>

            <Tab>
                {tabLinks}
            </Tab>

            {tabDetails}
        </Wrapper>
    );
}

export default tab;