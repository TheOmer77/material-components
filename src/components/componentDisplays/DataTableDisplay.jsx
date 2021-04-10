import React, { useState } from 'react';

// Components
import {
  DataTable,
  DataTableBody,
  DataTableCell,
  DataTableContent,
  DataTableHead,
  DataTableHeadCell,
  DataTableRow,
} from '@rmwc/data-table';
import { Checkbox } from '@rmwc/checkbox';

const DataTableDisplay = ({ data }) => {
  const [checkedItems, setCheckedItems] = useState({
    Cookies: true,
    Pizza: false,
    'Ice Cream': true,
  });

  return (
    <div className='row'>
      <DataTable>
        <DataTableContent>
          <DataTableHead>
            <DataTableRow>
              <DataTableHeadCell>I like this</DataTableHeadCell>
              <DataTableHeadCell>Name</DataTableHeadCell>
              <DataTableHeadCell>Quantity</DataTableHeadCell>
              <DataTableHeadCell>Price</DataTableHeadCell>
            </DataTableRow>
          </DataTableHead>
          <DataTableBody>
            {data.map((item) => (
              <DataTableRow key={item.name}>
                <DataTableCell>
                  <Checkbox
                    checked={checkedItems[item.name]}
                    onChange={(e) =>
                      setCheckedItems({
                        ...checkedItems,
                        [item.name]: !!e.target.checked,
                      })
                    }
                  />
                </DataTableCell>
                <DataTableCell>{item.name}</DataTableCell>
                <DataTableCell>{item.quantity}</DataTableCell>
                <DataTableCell>${item.price}</DataTableCell>
              </DataTableRow>
            ))}
          </DataTableBody>
        </DataTableContent>
      </DataTable>
    </div>
  );
};

export default DataTableDisplay;
