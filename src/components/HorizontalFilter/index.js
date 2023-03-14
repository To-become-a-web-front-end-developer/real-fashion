export default function HorizontalFilter(props) {
    return(
        <div className="row align-items-center">
            <div className="col text-center">
                <div className="new_arrivals_sorting">
                    <ul className="arrivals_grid_sorting">
                        <li className="grid_sorting_button button d-flex flex-column jutify-content-center align-items-center active is-checked" 
                        data-filter="*">
                            all
                        </li>
                        <li className="grid_sorting_button button d-flex flex-column jutify-content-center align-items-center" 
                        data-filter=".women">
                            women's
                        </li>
                        <li className="grid_sorting_button button d-flex flex-column jutify-content-center align-items-center" 
                        data-filter=".accessories">
                            accessories
                        </li>
                        <li className="grid_sorting_button button d-flex flex-column jutify-content-center align-items-center" 
                        data-filter=".men">
                            men's
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}