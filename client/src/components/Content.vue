<template>
  <div class="card text-center m-3">
    <h5 class="card-header">{{tasks.title}}</h5>
    <div class="card-body">
      <p>
        <strong>Description</strong>
      </p>
      <p class>{{tasks.description}}</p>
      <hr />
      <p>
        <strong>Assignee</strong>
      </p>
      <p class="card-text">{{tasks.assignee}}</p>
    </div>
    <div class="card-footer">
      <div class="row">
        <div class="col">
          <button
            href="#"
            class="btn btn-primary my-3"
            :class="backwardButton"
            v-if="tasks.status =='Todo' || tasks.status =='Doing' || tasks.status =='Done'"
            @click="updateBackward(tasks.id)"
          >
            <i class="fas fa-angle-double-left"></i>
          </button>
        </div>
         <div class="col">
          <button
            href="#"
            class="btn btn-dark my-3"
            @click="deleteTask(tasks.id)"
          >
            <i class="fas fa-trash"></i>
          </button>
        </div>
        <div class="col">
          <button
            href="#"
            class="btn my-3"
            :class="forwardButton"
            v-if="tasks.status =='Back-log' || tasks.status =='Todo' || tasks.status =='Doing'"
            @click="updateForward(tasks.id)"
          >
            <i class="fas fa-angle-double-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../config/firebase";

export default {
  nama: `Content`,
  props: ["box", "tasks"],
  data() {
    return {
      forwardButton: "",
      backwardButton: ""
    };
  },
  methods: {
    updateForward(id) {
      let updateStatus;
      if (this.tasks.status == "Back-log") {
        updateStatus = "Todo";
      }
      if (this.tasks.status == "Todo") {
        updateStatus = "Doing";
      }
      if (this.tasks.status == "Doing") {
        updateStatus = "Done";
      }
      db.collection("tasks")
        .doc(id)
        .update({
          status: updateStatus
        })
        .then(() => {
          console.log("updated");
        })
        .catch(error => {
          console.log(error);
        });
    },
    updateBackward(id) {
      let updateStatus;
      if (this.tasks.status === `Done`) {
        updateStatus = `Doing`;
      }
      if (this.tasks.status === `Doing`) {
        updateStatus = `Todo`;
      }
      if (this.tasks.status === `Todo`) {
        updateStatus = `Back-log`;
      }
      db.collection("tasks")
        .doc(id)
        .update({
          status: updateStatus
        })
        .then(() => {
          console.log("updated");
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteTask(id) {
      db.collection("tasks")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!")
        })
        .catch((error) => {
          console.log(error)
        });
    }
  },
  created() {
    if (this.box.name === `Back-log`) {
      this.forwardButton = "btn-primary";
    }
    if (this.box.name === `Todo`) {
      this.forwardButton = "btn-warning";
      this.backwardButton = "btn-danger";
    }
    if (this.box.name === `Doing`) {
      this.forwardButton = "btn-success";
      this.backwardButton = "btn-primary";
    }
    if (this.box.name === `Done`) {
      this.backwardButton = "btn-warning";
    }
  }
};
</script>

<style>
</style>s