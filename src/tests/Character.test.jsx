import { render, screen } from '@testing-library/react';
import Character from '../components/Character';

const samewiseGamgee = {
    "_id": "5cd99d4bde30eff6ebccfd0d",
    "height": "1.22m (4'0\")",
    "race": "Hobbit",
    "gender": "Male",
    "birth": "April 6 ,2980",
    "spouse": "Rosie Cotton",
    "death": "Still alive, after going to the ,Undying Lands, in ,FO 61",
    "realm": "",
    "hair": "Blond (movie)",
    "name": "Samwise Gamgee",
    "wikiUrl": "http://lotr.wikia.com//wiki/Samwise_Gamgee",
    "imgUrl": "https://www.frontporchrepublic.com/wp-content/uploads/2011/05/Samwise-Gamgee.jpg"

};

it('Character Component Renders Without Error', () => {
    render(<Character />);
});

describe('Character Component Content Structure', () => {
    it("Renders an h2 for the Character's Name", () => {
        render(<Character />);
        const characterHeading = screen.getByRole("heading", { level: 2 });

        expect(characterHeading).toBeDefined();
    });

    it("Renders an image for the Character", () => {
        render(<Character />);
        const charImg = screen.getByRole('img');

        expect(charImg).toBeDefined();
    });

    it("Renders a list for the character", () => {
        render(<Character />);

        const charList = screen.getByRole('list');

        expect(charList).toBeDefined();
    });

    it("Renders the list items for the character", () => {
        render(<Character />);

        const Items = screen.getByText('listItem');

        expect(Items.length).toBe(5);
    });

    it("Reanders a list item for the character's DOB", () => {
        render(<Character />);

        const charDOB = screen.getByText("/Date Of Birth:/, i");

        expect(charDOB).toBeDefined();
    });

    it("Renders a list item for the character's DOD", () => {
        render(<Character />);

        const charDeath = screen.getByText("/Death Of Death:/, i");

        expect(charDeath).toBeDefined();
    });

    it("Renders a list item for the character's Race", () => {
        render(<Character />);

        const charRace = screen.getByText("/Race:/i");

        expect(charRace).toBeDefined();
    });

    it("Renders a list item for the character's Realm", () => {
        render(<Character />);

        const charRealm = screen.getByText("/Realm:/, i");
        expect(charRealm).toBeDefined();

    });

    it("Renders a list item for the character's Spouse", () => {
        render(<Character />);

        const charSpouse = screen.getByText("/Spouse:/, i");

        expect(charSpouse).toBeDefined();
    });

    

});

describe("Character components Render's Props", () => {
   

    it("Renders the character's name", () => {
        render(<Character {...samewiseGamgee} />);

        const charHeading = screen.getByText("heading", { level: 2 });

        expect(charHeading).toBeDefined();
    });

    it("Renders the Character's DOB", () => {
        render(<Character{...samewiseGamgee} />);

        const dethOfBirth = screen.getByText(`Death of Birth: ${samewiseGamgee.birth}`);

        expect(dethOfBirth).toBeDefined();
    });

    it("Renders the Character's DOD", () => {
        render(<Character{...samewiseGamgee} />);

        const dethOfDeath = screen.getByText(`Death of Death: ${samewiseGamgee.death}`);

        expect(dethOfDeath).toBeDefined();
    });

    it("Renders the Character's Race", () => {
        render(<Character {...samewiseGamgee} />);

        const charRace = screen.getByText(`Race: ${samewiseGamgee.race}`);

        expect(charRace).toBeDefined();
    });

    it("Renders the Character's Realm", () => {
        render(<Character {...samewiseGamgee} />);

        const charRealm = screen.getByText(`Realm: ${samewiseGamgee.realm}`);

        expect(charRealm).toBeDefined();
    });

    it("Renders the Character's Spouse", () => {
        render(<Character {...samewiseGamgee} />);

        const charSpouse = screen.getByText(`Spouse: ${samewiseGamgee.spouse}`);

        expect(charSpouse).toBeDefined();
    });

});






