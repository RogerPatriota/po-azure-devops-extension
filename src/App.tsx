import React, { JSX } from "react";

import { Page } from "azure-devops-ui/Page"
import { TabBar, Tab, TabSize } from "azure-devops-ui/Tabs";
import { Header, TitleSize } from "azure-devops-ui/Header"
import { IHeaderCommandBarItem } from "azure-devops-ui/HeaderCommandBar";

import * as SDK from "azure-devops-extension-sdk"

import Modal  from "./components/Modal";
import { SolutionProvider } from "./context/SolutionContext";
import { IExtensionDataManager, IExtensionDataService } from "azure-devops-extension-api";


interface State {
    selectedTabId?: string,
    newSolutionModal?: boolean
}

export class App extends React.Component<{}, State> {

    headerItem: IHeaderCommandBarItem[]; 

    constructor(props: {}) {
        super(props);

        this.state = {
            selectedTabId: "tab1"
        };

        this.teste_get()
        
        this.headerItem = [
            {
                id: "create",
                text: "New Solution",
                onActivate: () => {
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
                    className=""
                >
                    <Tab name="Overview" id="tab1"></Tab>
                    <Tab name="Roadmap" id="tab2"></Tab>
                    <Tab name="Audit" id="tab3"></Tab>
                </TabBar>
                <SolutionProvider>
                    { this.state.newSolutionModal && <Modal onClose={() => this.setState({ newSolutionModal: false })}/> }
                </SolutionProvider>
            </Page>
        )
    }

    private onTabChange = (tabId: string) => {
        this.setState(
            { selectedTabId: tabId }
        )
    }

    private teste = () => {
        SDK.init();
        
        if (!SDK.getConfiguration()) {
            return "error";
        }

        const contributionId = SDK.getContributionId();
        if (!contributionId) {
            return "error";
        }

        SDK.getService<IExtensionDataManager>(contributionId).then(function(dataService) {
            var teste = {
                nome: "roger",
                age: "21"
            }
            dataService.createDocument("MyCollection", teste).then(function(doc) {
                console.log("Relatorio teste: " + doc.id)
            })
        })
    };

    private teste_get = () => {
        SDK.init();

        const contributionId = SDK.getContributionId();
        if (!contributionId) {
            return "error";
        }

        SDK.getService<IExtensionDataManager>(contributionId).then(function(dataService) {
            dataService.getDocument("MyCollection", "1").then(function(doc) {
                console.log(doc)
            })
        })

    }
}
