import { render, screen, fireEvent } from "@testing-library/react";
import { SubscribeButton } from "."
import { useRouter } from "next/router";
import { mocked } from "ts-jest/utils";
import { signIn, useSession } from "next-auth/client";

jest.mock("next-auth/client")
jest.mock("next/router")

describe("SubcribeButton Component", () => {

    test("renders correctly", () => {
        const useSessionMocked = mocked(useSession)

        useSessionMocked.mockReturnValueOnce([null, false])

        render(<SubscribeButton />)

        expect(screen.getByText("Subscribe now")).toBeInTheDocument();
    })

    test("redirects user to sign in when not authenticated", () => {

        const signInMocked = mocked(signIn);
        const useSessionMocked = mocked(useSession)

        useSessionMocked.mockReturnValueOnce([null, false])

        render(<SubscribeButton />)

        const subscribeButton = screen.getByText("Subscribe now")

        fireEvent.click(subscribeButton)

        expect(signInMocked).toHaveBeenCalled()
    })

    test("redirects user to post when user already has a subscription", () => {
        const useRouterMocked = mocked(useRouter)
        const useSessionMocked = mocked(useSession)

        useSessionMocked.mockReturnValueOnce([
            {
                user: {
                    name: "John Doe",
                    email: "johndoe@example.com"
                },
                activeSubscription: "fake-active-subscription ",
                expires: "fake-expires"
            },
            false
        ])

        const pushMock = jest.fn()

        useRouterMocked.mockReturnValueOnce({
            push: pushMock
        } as any)

        render(<SubscribeButton />)

        const subscribeButton = screen.getByText("Subscribe now")

        fireEvent.click(subscribeButton)

        expect(pushMock).toHaveBeenCalledWith("/posts")
    })

})
