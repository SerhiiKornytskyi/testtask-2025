import { useState } from 'react'
import { StyledFilterWrapper } from './styled'
import type { FilterState } from '@/utils/types'

function Filter({state, handleFilterChange, refetch}) {

    const clearState: FilterState = {
        status: '',
        name: '',
    };

    const [filterState, setFilterState] = useState<FilterState>(state)

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterState((filterState) => ({ ...filterState, status: e.target.value}))
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterState((filterState) => ({ ...filterState, name: e.target.value }))
    }

    const handleClear = () => {
        setFilterState(clearState)
        handleFilterChange(clearState)
    }

    const handleSearch = () => {
        handleFilterChange(filterState);
    }

    return (
        <StyledFilterWrapper>
            <div>
                <span>Name: </span>
                <input
                    type="text"
                    name="name"
                    value={filterState.name}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                <span>Status: </span>
                <select
                    id="status"
                    value={filterState.status}
                    onChange={handleStatusChange}
                >
                    <option value="">NotSet</option>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="Unknown">Unknown</option>
                </select>
            </div>
            <div>
                <button type="button" onClick={handleSearch}>Search</button>
                <button class="clear" type="button" onClick={handleClear}>Clear</button>
                <button className="refetch" type="button" onClick={refetch}>Refetch</button>
            </div>
        </StyledFilterWrapper>
    )
}

export default Filter
