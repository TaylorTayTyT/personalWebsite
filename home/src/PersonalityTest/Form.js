
export default function Formed() {
  return (
    <form action = '/' method="POST">
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}