import React from 'react'

export default function Login() {
    return (
        <div>
            <form action="#" method="post">
                <input type="text" name="username" id="username" placeholder="Tên đăng ký" /><br />
                <input type="password" name="password" id="password" placeholder="Mật khẩu" /><br />
                <input type="submit" name="btnsubmit" id="btnsubmit" value="Đăng ký" />
            </form>

        </div>
    )
}
