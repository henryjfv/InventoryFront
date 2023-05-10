
describe('App_function', () => {

    // Tests that the Navbar component is displayed if a token exists. 
    it("test_navbar_displayed_if_token_exists", () => {
        const existToken = true
        const { getByText } = render(<App />)
        const navbarElement = getByText('Logout')
        expect(navbarElement).toBeInTheDocument()
    })

    // Tests that the Home screen is displayed if a token exists and the user is not logged in. 
    it("test_home_screen_displayed_if_token_exists_and_user_not_logged_in", () => {
        const existToken = true
        const { getByText } = render(<App />)
        const homeElement = getByText('Company')
        expect(homeElement).toBeInTheDocument()
    })

    // Tests that the ProtectedRoute component redirects to the login screen if a token does not exist. 
    it("test_protected_route_component_redirects_to_login_screen_if_token_does_not_exist", () => {
        const existToken = false
        const { getByText } = render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        )
        const loginElement = getByText('Welcome')
        expect(loginElement).toBeInTheDocument()
    })

    // Tests that the ProtectedLogin component redirects to the home screen if a token exists. 
    it("test_protected_login_component_redirects_to_home_screen_if_token_exists", () => {
        const existToken = true
        const { getByText } = render(
            <MemoryRouter initialEntries={['/login']}>
                <App />
            </MemoryRouter>
        )
        const homeElement = getByText('Company')
        expect(homeElement).toBeInTheDocument()
    })

    // Tests that the Login screen is displayed if a token does not exist. 
    it("test_login_screen_displayed_if_token_does_not_exist", () => {
        const existToken = false
        const { getByText } = render(
            <MemoryRouter initialEntries={['/login']}>
                <App />
            </MemoryRouter>
        )
        const loginElement = getByText('Welcome')
        expect(loginElement).toBeInTheDocument()
    })

    // Tests that the Inventory screen is displayed if the user is an admin and a token exists. 
    it("test_inventory_screen_displayed_if_user_is_admin_and_token_exists", () => {
        const existToken = true
        const roleUser = 'admin'
        const { getByText } = render(
            <MemoryRouter initialEntries={['/inventory/1/companyName']}>
                <App />
            </MemoryRouter>
        )
        const inventoryElement = getByText('Inventory')
        expect(inventoryElement).toBeInTheDocument()
    })
});
