import { useEffect } from "react"
import { UserInfo } from "./UserInfo"
import { useDispatch, useSelector } from "react-redux"
import { setUser } from "store"

export const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.app.user)

  useEffect(() => {
    setTimeout(() => {
      dispatch(setUser({
        id: 1,
        name: 'Иван Иванов',
        email: 'ivan@example.com'
      }))
    }, 500)
  }, [dispatch])

  return (
    <header className="header">
      <h1>🛒 Интернет-магазин</h1>
      <UserInfo user={user} />
    </header>
  );
}