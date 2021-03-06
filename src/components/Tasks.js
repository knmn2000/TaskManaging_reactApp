import { connect } from "react-redux";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

import { getTasks } from "../actions/task";
import Card from "./Card";

const Tasks = ({ getTasks, tasks, sort }) => {
  useEffect(() => {
    getTasks();
  }, [tasks.length]);
  return (
    <div className="tasks">
      {tasks.map((task) => {
        if (sort === "status" && tasks.length > 1) {
          if (task.status === false) {
            return <Card task={task} key={task["id"]} />;
          }
        } else {
          return <Card task={task} key={task["id"]} />;
        }
      })}
    </div>
  );
};
Tasks.propTypes = {
  getTasks: PropTypes.func.isRequired,
  tasks: PropTypes.array,
  sort: PropTypes.string,
};
const mapStateToProps = (state) => {
  return {
    tasks: state.task.tasks,
    sort: state.task.sort,
  };
};
export default connect(mapStateToProps, { getTasks })(Tasks);
