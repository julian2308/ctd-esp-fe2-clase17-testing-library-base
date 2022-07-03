import { fireEvent, render, screen } from "@testing-library/react";
import { LanguageComponent, LanguageProvider } from 'features/language';
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from 'store/store';
import { theme } from '../styles/';
import { TrackingProvider } from 'features/tracking/tracking.context';

beforeEach(() => {
    render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <TrackingProvider>
                    <LanguageProvider>
                        <LanguageComponent/>
                    </LanguageProvider>
                </TrackingProvider>
            </ThemeProvider>
        </Provider>
    )
});

describe("verifing the existence of the btns", () => {

    it("should display the button with text Spanish", ()=> {

        const spanishBtn = screen.queryByText("Spanish")
        expect(spanishBtn).toBeInTheDocument()


    })

    it("should display the button with text English", ()=> {

        const englishBtn = screen.queryByText("English")
        expect(englishBtn).toBeInTheDocument()


    })

    it("should display the button with text Portuguese", ()=> {

        const portugueseBtn = screen.queryByText("Portuguese")
        expect(portugueseBtn).toBeInTheDocument()


    })
})

describe("Buttons and it's funcionalities", () => {

    it("Should render the text English on Spanish", () =>{

        const spanishBtn = screen.getByText("Spanish")
        fireEvent.click(spanishBtn)
        const englishBtn = screen.getByText("Inglés")
        expect(englishBtn).toBeInTheDocument()

    })

    it("Should render the text Portuguese on Spanish", () =>{

        const spanishBtn = screen.getByText("Spanish")
        fireEvent.click(spanishBtn)
        const portugueseBtn = screen.getByText("Portugués")
        expect(portugueseBtn).toBeInTheDocument()

    })

    it("Should render the text English on Portugues", () =>{

        const portugueseBtn = screen.getByText("Portuguese")
        fireEvent.click(portugueseBtn)
        const englishBtn = screen.getByText("Inglês")
        expect(englishBtn).toBeInTheDocument()

    })

    it("Should render the text Spanish on Portuguese", () =>{

        const portugueseBtn = screen.getByText("Portuguese")
        fireEvent.click(portugueseBtn)
        const spanishBtn = screen.getByText("Espanhol")
        expect(spanishBtn).toBeInTheDocument()

    })
})