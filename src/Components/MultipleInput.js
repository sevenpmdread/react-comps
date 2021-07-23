import React,{useState,useEffect,Component} from 'react';
import ReactDOM from 'react-dom';
import TagInput from './TagInput';
import '../styles/TagInput.scss';

function MultipleInput() {
    

    var [ tags, setTags ] = useState([]);

    useEffect(() => {
        setTags(['one']);
    }, []);

    function onChange(tags) {
        setTags(tags);
    }

    function validateTag(tag) {
        return true;
    }
    function handleSubmit(event) {
        alert('These were submitted ' + tags);
        event.preventDefault();
      }

    return (
        <div className="tagMain">
            <h3>Tags</h3>
            <div>
                <TagInput value={tags} onChange={onChange} onEnter={validateTag} /><button onClick={handleSubmit}><i class="fa fa-search " aria-hidden="true"></i></button>
            </div>
        </div>
    );
}
export default MultipleInput;
