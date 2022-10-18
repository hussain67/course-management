import React from "react";
import Header from "./Header";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";

//With shallow render React component tag is searched
it("contains 3 Navlinks via shallow", () => {
	const numLinks = shallow(<Header />).find("NavLink").length;
	expect(numLinks).toBe(3);
});

//With mount rendered html tag is searched generated in the final dom.
//We also need to pull in React Router's memoryRouter for testing since the Header expects to have React Router's props passed in.

it("Contains 3 Anchors via mount", () => {
	const numAnchors = mount(
		<MemoryRouter>
			<Header />
		</MemoryRouter>
	).find("a").length;
	expect(numAnchors);
});
