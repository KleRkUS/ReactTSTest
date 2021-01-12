import React from "react";
import {FilterInput, FilterLabel, FilterWrapper} from "../../../Styles/Filter";

type FilterTypes = {
    onChange: (v:string) => void
}

export const Filter = ({onChange} :FilterTypes) => {
    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    }

    return(
        <FilterWrapper>
            <FilterLabel>
                Filter <br/>
                <FilterInput placeholder="Start typing..." onChange={(e) => onChangeValue(e)}/>
            </FilterLabel>
        </FilterWrapper>
    )
}