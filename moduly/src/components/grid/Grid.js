import React from 'react'

class Grid extends React.Component {
    state = {
        filters: {},
        sortColumn: "name",
        sortAscending: true,
        grouping: ""
    }

    groupSelector() {
        return (
            <div>
                Grupowanie
                <select name="group" id="group" onChange={this.change} value={this.state.value}>
                    <option value="empty">-</option>
                    {

                        Object.keys(this.props.data[0]).map((property, i) =>
                            <option value="property">{property}</option>
                        )
                    }
                </select>
            </div>
        )
    }

    columnHeadrs() {
        console.log(this.props.data)
        return (
            <tr>
                {
                    Object.keys(this.props.data[0]).map((property, i) =>
                        this.isHeaderForProperty(property) &&

                        <th key={i} column={property} onClick={() => this.changeSort(property)}>
                            {this.props.headers[property]}
                            { 
                                this.state.sortColumn === property && 
                                (this.state.sortAscending ?
                                <span>▼</span> : <span>▲</span>)
                            }
                        </th>
                        
                    )
                }
            </tr>
        )
    }

    columnFilters() {
        return (
            <tr>
                {
                    Object.keys(this.props.data[0]).map((property, i) =>
                        this.isHeaderForProperty(property) &&

                        <th key={i} column={property}>
                            <input type="text" onChange={(e) => this.changeFilters(e, property)}></input>
                        </th>
                    )
                }
            </tr>
        )
    }

    rows() {
        return (
            this.getData().map((object, i) =>
                <tr>
                    {
                        Object.keys(object).map((property, i) =>
                            this.isHeaderForProperty(property) &&
                            <td>{object[property]}</td>)
                    }
                </tr>)
        )
    }

    render() {
        return (
            <div>
                {
                    //this.groupSelector()
                }
                <table>
                    {this.columnHeadrs()}
                    {this.columnFilters()}
                    {this.rows()}
                </table>
            </div>
        )
    }

    getData = () => {
        let data = this.props.data;
        for (let property in this.state.filters) {
            data = data.filter((object) => { return object[property].toString().toLowerCase().includes(this.state.filters[property].toString().toLowerCase()) })
        }
        data = data.sort((a, b) => (a[this.state.sortColumn] > b[this.state.sortColumn] ? (this.state.sortAscending ? 1 : -1) : (this.state.sortAscending ? -1 : 1)));
        return data;
    }

    changeSort = (column) => {
        this.setState({
            sortColumn: column,
            sortAscending: this.state.sortColumn == column ? !this.state.sortAscending : true
        })
    }

    changeFilters = (e, property) => {
        let filters = this.state.filters;
        filters[property] = e.target.value;
        this.setState({
            filters: filters
        })
    }

    changeGrouping = (e) => {
        this.setState({ grouping: e.target.value });
    }

    isHeaderForProperty(property) {
        console.log(this.props.headers);

        if (this.props.headers) {
            for (let prop in this.props.headers) {
                if (prop == property)
                    return true;
            }
            return false;
        }
        return true;
        
    }

}

export default Grid