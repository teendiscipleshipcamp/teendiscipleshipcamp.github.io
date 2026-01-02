
const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth',
        });
    }
};

export const scrollToSectionHandler = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId.substring(1));
}
    