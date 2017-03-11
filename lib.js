import _ from 'lodash';

export default {

	test(){
		_.forEach([1,2,3], entry =>{
			console.log(entry);
		})
	}
};