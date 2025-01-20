const MaceApp = () => {
    return ( 
        <>
        <div class="form-container">
        <h1>Enter Details of 1st Cement</h1>
        <form>
	        <div class="form-group-inline">
                <div class="form-group">
                    <label for="test-date">Test Date</label>
                    <input type="date" id="test-date" name="test-date"/>
                </div>

                <div class="form-group">
                    <label for="type-of-cement">Type of Cement</label>
                    <input type="text" id="type-of-cement" name="type-of-cement" placeholder="Enter type of Cement"/>
                </div>
	        </div>

            <div class="form-group-inline">
                <div class="form-group">
                    <label for="brand-name">Brand Name</label>
                    <select id="brand-name" name="brand-name">
                        <option value="">Select</option>
                        <option value="brand1">Brand 1</option>
                        <option value="brand2">Brand 2</option>
                    </select>
                </div>
                <div class="form-group">
                    <label htmlFor="trail-no">Number of trails of this Brand</label>
                    <input type="text" id="trail-no" name="trail-no" placeholder="No. of trails of this Brand"/>
                </div>
            </div>

            <div class="form-group-inline">
                <div class="form-group">
                    <label for="week-no">Week No</label>
                    <input type="text" id="week-no" name="week-no" placeholder="Enter Week No"/>
                </div>
                <div class="form-group">
                    <label htmlFor="slump-req">Slump Requirement</label>
                    <input type="text" name="slump-req" id="slump-req" placeholder="Enter Slump Requirement" />
                </div>
            </div>

            <div class="form-group-inline">
                <div class="form-group">
                    <label htmlFor="works">Works</label>
                    <input type="text" id="works" name="works" placeholder="Enter Works"/>
                </div>
                <div class="form-group">
                    <label htmlFor="mix-prop">Mix Proportion: Weight/Volume</label>
                    <input type="text" name="mix-prop" id="mix-prop" placeholder="Enter Mix Proportion" />
                </div>
            </div>

            <h2>Raw Materials</h2>
            <div class="form-group-inline">
                <div class="form-group">
                    <label for="cement-wgt">Cement Weight (in KG)</label>
                    <input type="text" id="cement-wgt" name="cement-wgt" placeholder="Weight in KG"/>
                </div>
                <div class="form-group">
                    <label for="water-wgt">Water Weight (in KG)</label>
                    <input type="text" id="water-wgt" name="water-wgt" placeholder="Weight in KG"/>
                </div>
            </div>

            <div class="form-group-inline">
                <div class="form-group">
                    <label htmlFor="vol">Volume</label>
                    <input type="text" name="vol" id="vol" placeholder="Volume in cft" />
                </div>
                <div class="form-group">
                    <label htmlFor="vol">Volume</label>
                    <input type="text" name="vol" id="vol" placeholder="Volume in cft" />
                </div>
            </div>

            <div class="form-group-inline">
                <div class="form-group">
                    <label for="sand-wgt">Sand Weight (in KG)</label>
                    <input type="text" id="sand-wgt" name="sand-wgt" placeholder="Weight in KG"/>
                </div>
                <div class="form-group">
                    <label for="admixture">Admixture</label>
                    <select id="admixture" name="admixture">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </div>

            <div class="form-group-inline">
                <div class="form-group">
                    <label htmlFor="vol">Volume</label>
                    <input type="text" name="vol" id="vol" placeholder="Volume in cft" />
                </div>
                <div class="form-group">
                    <label htmlFor="">If Yes,Name of Admixture</label>
                    <input type="text" placeholder="Enter Admixture Name" name="" id="" />
                </div>
            </div>

            <div class="form-group-inline">
                <div class="form-group">
                    <label htmlFor="">10 mm Aggregate Wgt in KG</label>
                    <input type="text" placeholder="Wgt in KG" name="" id="" />
                </div>
                <div class="form-group">
                    <label htmlFor="">Dosage Wgt in KG</label>
                    <input type="text" placeholder="Wgt in KG" name="" id="" />
                </div>
            </div>

            <div class="form-group-inline">
                <div class="form-group">
                    <label htmlFor="vol">Volume</label>
                    <input type="text" name="vol" id="vol" placeholder="Volume in cft" />
                </div>
                <div class="form-group">
                    <label htmlFor="vol">Volume</label>
                    <input type="text" name="vol" id="vol" placeholder="Volume in cft" />
                </div>
            </div>

            <div class="form-group-inline">
                <div class="form-group">
                    <label htmlFor="">20 mm Aggregate Wgt in KG</label>
                    <input type="text" placeholder="Wgt in KG" name="" id="" />
                </div>
                <div class="form-group">
                    <label htmlFor="">Type of Admixture</label>
                    <input type="text" placeholder="Type of Admixture" name="" id="" />
                </div>
            </div>

            <div class="form-group-inline">
                <div class="form-group">
                    <label htmlFor="">Volume:</label>
                    <input type="text" placeholder="Volume in cft" /><br />
                </div>
            </div>

            <h2>Results - Slump Cone Test</h2>

            <div class="form-group-inline">
                <div class="form-group">
                    <label htmlFor="">Slump time in hr:min Initial:</label>
                    <input type="text" placeholder="Intial" name="" id="" />
                </div>
                <div class="form-group">
                    <label htmlFor="">Slumb value in mm Initial</label>
                    <input type="text" placeholder="Intial" name="" id="" />
                </div>
            </div>   

            <div class="form-group-inline">
                <div class="form-group">
                    <label htmlFor="">1HR</label>
                    <input type="text" placeholder="1HR" name="" id="" />
                </div>
                <div class="form-group">
                    <label htmlFor="">1HR</label>
                    <input type="text" placeholder="1HR" name="" id="" />
                </div>
            </div>   

            <h2>Result - Compresive Strenght</h2>

            <div class="form-group-inline">
                <div class="form-group">
                    <label htmlFor="">Load in KN 3Days:</label>
                    <input type="text" placeholder="3 Days" name="" id="" />
                </div>
                <div class="form-group">
                    <label htmlFor="">Compresive strength in MPA 3 Days:</label>
                    <input type="text" placeholder="3 Days" name="" id="" />
                </div>
            </div>

            <div class="form-group-inline">
                <div class="form-group">
                    <label htmlFor="">7 Days</label>
                    <input type="text" placeholder="7 Days" name="" id="" />
                </div>
                <div class="form-group">
                    <label htmlFor="">7 Days</label>
                    <input type="text" placeholder="7 Days" name="" id="" />
                </div>
            </div>   

            <div class="form-group-inline">
                <div class="form-group">
                    <label htmlFor="">28 Days</label>
                    <input type="text" placeholder="28 Days" name="" id="" />
                </div>
                <div class="form-group">
                    <label htmlFor="">28 Days</label>
                    <input type="text" placeholder="28 Days" name="" id="" />
                </div>
            </div>   
            <button type="submit">Submit</button>
        </form>
    </div>
    </>
     );
}
 
export default MaceApp;