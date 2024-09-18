import styles from "./styles.module.css";

const UserItem = ({ name, email, phone, website, address }) => (
  <div>
    <h4>Name: {name}</h4>
    <p>Email:{email}</p>
    <p>Phone: {phone}</p>
    <p>Website:{website}</p>
    <p>City: {address.city}</p>
    <hr />
  </div>
);

export default UserItem;
