import React, { JSX } from "react";

import { Page } from "azure-devops-ui/Page"
import { TabBar, Tab, TabSize } from "azure-devops-ui/Tabs";
import { Header, TitleSize } from "azure-devops-ui/Header"
import { IHeaderCommandBarItem } from "azure-devops-ui/HeaderCommandBar";

import { Modal } from "./components/Modal";

interface State {
    selectedTabId?: string,
    newSolutionModal?: boolean
}

export class App extends React.Component<{}, State> {

    headerItem: IHeaderCommandBarItem[];
    newSolutionModal: boolean = false;

    constructor(props: {}) {
        super(props);

        this.state = {
            selectedTabId: "tab1"
        };

        this.headerItem = [
            {
                id: "create",
                text: "New Solution",
                onActivate: () => {
                    console.log(this.newSolutionModal)
                    this.setState({ newSolutionModal: true })
                },
                iconProps: {
                    iconName: "add"
                },
            }
        ]
    }

    public render(): JSX.Element {
        return (
            <Page className="full-width">
                <Header 
                    title="Product Owner Team" 
                    titleSize={TitleSize.Large}
                    commandBarItems={this.headerItem}
                    className="margin-bottom-8"
                />
                <TabBar
                    onSelectedTabChanged={this.onTabChange}
                    selectedTabId={this.state.selectedTabId}
                    tabSize={TabSize.LargeLink}
                >
                    <Tab name="Overview" id="tab1"></Tab>
                    <Tab name="Roadmap" id="tab2"></Tab>
                    <Tab name="Audit" id="tab3"></Tab>
                </TabBar>
                { this.state.newSolutionModal && <Modal /> }
            </Page>
        )
    }

    private onTabChange = (tabId: string) => {
        this.setState(
            { selectedTabId: tabId }
        )
    }
}