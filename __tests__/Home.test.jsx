import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
    it('should have Docs text', () => {
        render(<Home />);

        const getElm = screen.getByText('Docs');

        expect(getElm).toBeInTheDocument();
    });

    it('should containe the text "Lorem ipsum"', () => {
        render(<Home />);

        const getElm = screen.getByText(/Lorem ipsum/i);

        expect(getElm).toBeInTheDocument();
    });

    /*it('should have a heading', () => {
        render(<Home />);

        const heading = screen.getByHeading('heading', {
            name: 'Learn <span>-&gt;</span>'
        });

        expect(heading).toBeInTheDocument();
    });*/
});