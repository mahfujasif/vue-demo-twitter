<template>
  <div class="user-profile">
    <div class="user-profile_user-panel">
      <h1 class="user-profile_username">@{{ user.username }}</h1>
      <div class="user-profile_admin-badge" v-if="user.isAdmin">Admin</div>

      <div class="user-profile_follower-count">
        <strong>Followers: </strong> {{ followers }}
      </div>

      <form
        class="user-profile_create-tweet"
        @submit.prevent="createNewTweet"
        :class="{ '--exceeded': newTweetCharacterCount > 180 }"
      >
        <label for="newTweet"
          ><strong>New Tweet</strong> ({{ newTweetCharacterCount }}/180)
        </label>
        <textarea id="newTweet" rows="4" v-model="newTweetContent" />

        <div class="create-tweet-panel_submit">
          <div class="user-profile_create-tweet-type">
            <label for="newTweetType"><strong>Type: </strong></label>
            <select id="newTweetType" v-model="selectedTweetType">
              <option
                :value="option.value"
                v-for="(option, index) in tweetTypes"
                :key="index"
              >
                {{ option.name }}
              </option>
            </select>
          </div>
          <button>Tweet</button>
        </div>
      </form>
    </div>

    <div class="user-profile_tweets-wrapper">
      <tweetItem
        v-for="tweet in user.tweets"
        :key="tweet.id"
        :username="user.username"
        :tweet="tweet"
        @favourite="toggleFavourite"
      />
    </div>
  </div>
</template>

<script>
2;

import tweetItem from "./TweetItem";

export default {
  name: "UserProfile",

  components: {
    tweetItem,
  },

  data() {
    return {
      newTweetContent: "",
      selectedTweetType: "instant",
      tweetTypes: [
        { value: "draft", name: "Draft" },
        { value: "instant", name: "Instant Tweet" },
      ],
      followers: 0,
      user: {
        id: 1,
        username: "asif",
        firstName: "Mahfujur",
        lastname: "Rahman",
        email: "asif@gmail.com",
        isAdmin: true,
        tweets: [
          { id: 1, content: "Hello friends" },
          { id: 2, content: "Something happened!" },
          { id: 3, content: "Something else happened!!" },
          { id: 4, content: "something else happened again!!!" },
        ],
      },
    };
  },

  watch: {
    followers(newCount, prevCount) {
      console.log(newCount + ":" + prevCount);
      if (newCount > prevCount) {
        console.log("${this.user.username} has gained a follower");
      }
    },
  },

  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastname}`;
    },
    newTweetCharacterCount() {
      return this.newTweetContent.length;
    },
  },

  methods: {
    followUser() {
      this.followers++;
    },
    toggleFavourite(id) {
      console.log(`Favourited tweet #${id}`);
    },
    createNewTweet() {
      console.log("ok");
      console.log(this.newTweetContent);
      if (this.newTweetContent && this.selectedTweetType !== "draft") {
        this.user.tweets.unshift({
          id: this.user.tweets.length + 1,
          content: this.newTweetContent,
        });
      }
      this.newTweetContent = "";
    },
  },

  mounted() {
    this.followUser();
  },
};
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 3fr 8fr;
  grid-gap: 50px;
  padding: 50px 5%;

  .user-profile_user-panel {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #dfe3e8;

    h1 {
      margin: 0;
    }

    .user-profile_admin-badge {
      background: purple;
      color: white;
      border-radius: 5px;
      margin-right: auto;
      margin-bottom: 20px;
      padding: 0 10px;
      font-weight: bold;
    }

    .user-profile_create-tweet {
      border-top: 1px solid black;
      display: flex;
      flex-direction: column;
      padding-top: 20px;
      margin-top: 20px;

      textarea {
        border: 1px solid black;
        border-radius: 5px;
      }

      .create-tweet-panel_submit {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;

        .creat-tweet-type {
          padding: 10px 0;
        }

        button {
          padding: 5px 20px;
          margin: auto 0;
          border-radius: 5px;
          border: none;
          background-color: rgb(32, 114, 29);
          color: white;
          font-weight: bold;
        }
      }
    }
  }
  .user-profile_tweets-wrapper {
    display: grid;
    grid-gap: 10px;
  }

  .--exceeded {
    color: red;
    border-color: red;

    button {
      background-color: red;
    }
  }
}
</style>
