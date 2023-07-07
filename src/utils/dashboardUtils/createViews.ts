type View = 'recents' | 'drafts' | 'deleted';

interface ViewSection {
    label: View;
    path: `/dashboard/${View}/`;
    selected: boolean;
}

function checkSelected(comparable: string, selected: string): boolean {
    return comparable.includes(selected);
}

function createContentSections(
    allViews: View[],
    currentView: string
): ViewSection[] {
    const contentSections: ViewSection[] = allViews.map((view: View) => {
        return {
            label: view,
            path: `/dashboard/${view}/`,
            selected: checkSelected(view, currentView),
        };
    });

    return contentSections;
}

export { createContentSections };
