export default function ListItem({ data, ...props }) {
  return (
    <li style={{ cursor: "pointer" }} onClick={() => props.onClick(data)}>
      {data.name}
    </li>
  );
}
