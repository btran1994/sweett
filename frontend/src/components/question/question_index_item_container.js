import { connect } from "react-redux";
import QuestionIndexItem from "./question_index_item";
import { createAttempt } from "../../actions/attempt_actions";
import { recordQuestion, updateQuestion } from "../../actions/question_actions";
import { requestQuestionAttempts } from './../../actions/attempt_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    idx: ownProps.idx,
    question: ownProps.question
  };
};

const mapDispatchToProps = (dispatch) => {
    return ({
        createAttempt: attempt => dispatch(createAttempt(attempt)),
        recordQuestion: idx => dispatch(recordQuestion(idx)),
        requestQuestionAttempts: question_id => dispatch(requestQuestionAttempts(question_id)),
        updateQuestion: question_id => dispatch(updateQuestion(question_id))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndexItem);
