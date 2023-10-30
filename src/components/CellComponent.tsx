import React, { FC } from 'react'
import { Cell } from '../models/Cell'


interface ICellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
}

export const CellComponent: FC<ICellProps> = ({ cell, selected, click }) => {
    return (
        <div className={['cell', cell.color, selected ? "selected" : ' '].join(' ')}
            onClick={() => click(cell)}
            style={{ background: cell.availibale && cell.figure ? 'green' : ' ' }}
        >
            {cell.availibale && !cell.figure && <div className={"available"}></div>}
            {cell.figure?.logo && <img src={cell.figure.logo} />}
        </div>
    )
}
