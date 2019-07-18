import React from "react";
import { List } from "semantic-ui-react";

const MenuItem = props => {
  const { menus } = props;
  return (
    <List>
      {menus.map(menu => (
        <List.Item>
          <List.Icon name="folder" />
          <List.Content>
            <List.Header key={menu.id}>{menu.name}</List.Header>
            {menu.childMenus.length > 0 && (
              <List.List>
                <MenuItem menus={menu.childMenus} />
              </List.List>
            )}
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};

export default MenuItem;
