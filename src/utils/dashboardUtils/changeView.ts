interface ViewSection {
    label: string;
    path: string;
    clickable: boolean;
}

function checkClickable(path: string, view: string): boolean {
    return !path.includes(view);
}

function createContentSections(
    allViews: string[],
    currentView: string
): ViewSection[] {
    const contentSections: ViewSection[] = allViews.map((view: string) => {
        return {
            label: view,
            path: `/dashboard/${view}/`,
            clickable: checkClickable(view, currentView),
        };
    });

    return contentSections;
}

export { createContentSections };
