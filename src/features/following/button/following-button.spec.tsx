import { fireEvent, render, screen } from "@testing-library/react";
import { FollowingButtonComponent } from 'features/following/button'

const toggleFavoriteMock = jest.fn((isFavorite: boolean) => !isFavorite)

describe("verifing if it favorite or not", () => {

    it("should be favorite", ()=>{
        
        render(
            <FollowingButtonComponent isFav={true} onToggleFavorite={toggleFavoriteMock}/>

        )
        const altTex = screen.getByAltText('is_favorite')
        expect(altTex).toBeInTheDocument()
    })

    it("shouldn't be favorite", ()=>{
        
        render(
            <FollowingButtonComponent isFav={false} onToggleFavorite={toggleFavoriteMock}/>

        )
        const altTex = screen.getByAltText('is_not_favorite')
        expect(altTex).toBeInTheDocument()
    })

    it("pressing the botton should call the mock", ()=> {

        render(
            <FollowingButtonComponent isFav={false} onToggleFavorite={(isFav) => toggleFavoriteMock(isFav)}/>
        )

        const altTexImg = screen.getByAltText('is_not_favorite')
        fireEvent.click(altTexImg)
        expect(toggleFavoriteMock.mock.calls.length).toBe(1)


    })
})