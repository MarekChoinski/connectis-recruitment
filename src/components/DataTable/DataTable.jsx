import styles from "./DataTable.module.scss";
import { splitByMonths } from "../../utils/splitByMonths";
import { useMemo } from "react";
import { totalMonths, monthNames } from "../../constants";

export const DataTable = ({ users, transactions }) => {
  const splittedByMonths = useMemo(
    () => splitByMonths(transactions),
    [transactions]
  );

  const innerKeys = Object.keys(
    splittedByMonths[Object.keys(splittedByMonths)[0]]
  );

  return (
    <table>
      <thead>
        <tr>
          <th>User id</th>
          {innerKeys
            .filter((month) => month !== totalMonths)
            .map((month) => (
              <th>{monthNames[month]}</th>
            ))}
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr>
            <td>{user.key}</td>
            {innerKeys.map((month) => (
              <td>{splittedByMonths[user.key][month]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
