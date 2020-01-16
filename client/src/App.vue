<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <transition-group name="fade">
      <message-card v-for="message in messages" :key="message._id" :message="message" />
    </transition-group>
  </div>
</template>

<script>
import MessageCard from "./components/MessageCard";
import MessageService from "./MessageService";
import io from "socket.io-client";

export default {
  name: "app",
  components: {
    MessageCard
  },
  data() {
    return {
      messages: [],
      error: "",
      socket: "",
    };
  },
  head: {
    title() {
      return {
        inner: 'LINE Message Detection',
        complement: 'Demo'
      };
    }
  },
  mounted() {
    if (process.env.NODE_ENV === "production") {
      this.socket = io();
    } else {
      this.socket = io("http://192.168.33.10:5000");
    }

    this.socket.on("message-saved", async () => {
      const latestMessage = await MessageService.getLatestMessage();

      if (this.messages.length === 3) {
        this.messages.pop();
      }

      this.messages.unshift(latestMessage);
    });
  },
  async created() {
    try {
      this.messages = await MessageService.getMessages();
    } catch (err) {
      this.error = err.message;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 16px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
