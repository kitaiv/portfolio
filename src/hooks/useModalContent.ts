const useModalContent = (
        obj: any
    ) => {

    let modalObj = null;

    switch (obj.tag) {
        case 'work-experience':
            return modalObj = {
                title: obj.company,
                subtitle: obj.dateRange,
                tags: [
                    {
                        role: obj.title
                    }
                ],
                body: {
                    text: obj.jobSummary.summaryText,
                    keywords: obj.jobSummary.keywords,
                    details: {
                        resTitle: obj.jobSummary.keyResponsibilities.title,
                        resList: obj.jobSummary.keyResponsibilities.responsibilitiesList,
                        skillTitle: obj.jobSummary.skills.title,
                        skillsList: obj.jobSummary.skills.skillsList
                    }
                }
            }
        case 'projects':
            return modalObj = {
                title: obj.title,
                subtitle: null,
                tags: [
                    {
                        title: 'View on GitHub',
                        link: obj.githubLink
                    },
                    {
                        title: 'View Production',
                        link: obj.viewLink
                    }
                ],
                body: {
                    text: obj.description,
                    keywords: obj.keywords,
                    details: null
                }
            }
    
        default:
            break;
    }

    return modalObj;
}

export default useModalContent;