import {AuthService} from './auth.service'

const service = new AuthService()
service.init({env: "development",url:""})

test("register user should success", async () => {
    // given
    const username = "sometitle"
    const email = "somedescription@test.com"
    const password = "w"
    const role = 2

    // when
    const register = await service.registerUser(username,email,password,role)

    // then
    expect(register.id).toEqual("3")
    expect(register.token).not.toBeNull()
})




