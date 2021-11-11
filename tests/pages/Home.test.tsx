import { render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import Home, { getStaticProps } from "../../src/pages";
import { stripe } from "../../src/services/stripe"


jest.mock("next/router")
jest.mock("../../src/services/stripe")
jest.mock("next-auth/client", () => {
    return {
        useSession: () => [null, false]
    }
})

describe("Home page", () => {
    test("renders correctly", () => {
        render(<Home product={{ priceId: "fake-priceId", amount: "R$10,00" }} />)

        expect(screen.getByText("for R$10,00 month")).toBeInTheDocument()
    })

    test("loads initial data", async () => {
        const retriveStripePricesMocked = mocked(stripe.prices.retrieve)

        retriveStripePricesMocked.mockResolvedValueOnce({
            id: "fake-price-id",
            unit_amount: 1000
        } as any)

        const response = await getStaticProps({})

        expect(response)
    })
})