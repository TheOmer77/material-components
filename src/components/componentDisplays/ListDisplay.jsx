import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemGraphic,
  ListItemMeta,
  ListItemPrimaryText,
  ListItemSecondaryText,
  ListItemText,
} from '@rmwc/list';
import { IconButton } from '@rmwc/icon-button';

const ListDisplay = ({ data = [] }) => {
  const [activeItem, setActiveItem] = useState(data[0]?.title);

  return (
    <div className='row'>
      <List twoLine>
        {data.map((item) => (
          <ListItem
            key={item.title}
            activated={activeItem === item.title}
            onClick={() => setActiveItem(item.title)}
          >
            <ListItemGraphic icon={item.icon} />
            <ListItemText>
              <ListItemPrimaryText>{item.title}</ListItemPrimaryText>
              <ListItemSecondaryText>{item.subtitle}</ListItemSecondaryText>
            </ListItemText>
            <ListItemMeta>
              <IconButton
                icon='more_vert'
                onClick={(e) => e.stopPropagation()}
              />
            </ListItemMeta>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ListDisplay;
