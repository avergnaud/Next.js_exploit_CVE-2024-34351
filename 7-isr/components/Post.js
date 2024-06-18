export default function Post(props) {
    return (
        <tr>
          <td>{props.userId}</td>
          <td>{props.title}</td>
          <td>{props.body}</td>
        </tr>
    );
};