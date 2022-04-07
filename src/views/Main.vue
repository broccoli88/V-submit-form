<template>
    <div class="wrapper">
        <h1>Log In</h1>
        <div class="container">
            <div class="tabs">
                <button
                    data-tab="LogIn"
                    class="tab"
                    :class="{ active: isActive }"
                    @click="switchTab"
                >
                    Log In
                </button>
                <button
                    data-tab="Register"
                    class="tab"
                    :class="{ active: !isActive }"
                    @click.="switchTab"
                >
                    Register
                </button>
            </div>
            <component :is="activeTab" />
        </div>
    </div>
</template>

<script>
import LogIn from "../components/LogIn.vue";
import Register from "../components/Register.vue";
export default {
    components: { LogIn, Register },
    data() {
        return {
            isActive: true,
            activeTab: "LogIn",
        };
    },

    methods: {
        switchTab(e) {
            this.activeTab = e.target.dataset.tab;
            if (this.activeTab === "LogIn") {
                this.isActive = true;
            }

            if (this.activeTab === "Register") {
                this.isActive = false;
            }
        },
    },
};
</script>

<style>
.wrapper {
    color: hsl(0, 0%, 90%);

    width: 100vw;
    height: 100vh;

    background-color: hsl(0, 0%, 10%);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
}

h1,
h2 {
    font-family: "Staatliches", cursive;
}

h1 {
    font-size: 5rem;
}

h2 {
    font-size: 2rem;
}

.container {
    width: min(80%, 800px);
    height: 60%;

    background-color: hsl(0, 0%, 10%);
    box-shadow: 0 0 15px hsl(0, 0%, 5%), inset 0 0 15px hsl(0, 0%, 15%);
    border-radius: 20px;
    overflow: hidden;
}

.tabs {
    width: 100%;
    height: 15%;
    border-bottom: 1px solid black;

    display: flex;
}

.tab {
    background-color: hsl(0, 0%, 10%);
    border: 0;
    font-size: 2rem;
    font-weight: bold;
    color: hsl(0, 0%, 90%);
    font-family: "Staatliches", cursive;
    cursor: pointer;

    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.active {
    background-color: hsl(0, 0%, 15%);
    box-shadow: 0 0 15px hsl(0, 0%, 5%), inset 0 0 10px hsl(0, 0%, 20%);
}

.tab.active {
    font-size: 2.5rem;
    /* color: white; */
}
</style>