<template>
    <div class="wrapper">
        <h1>Log In</h1>
        <div class="container">
            <div class="tabs">
                <div class="tab active">
                    <h2>Log In</h2>
                </div>
                <div class="tab">
                    <h2>Register</h2>
                </div>
            </div>
            <LogIn />
        </div>
    </div>
</template>

<script>
import LogIn from "../components/LogIn.vue";
export default {
    components: { LogIn },
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
    color: hsl(0, 0%, 90%);
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
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
}

.active {
    background-color: hsl(0, 0%, 15%);
    box-shadow: 0 0 15px hsl(0, 0%, 5%), inset 0 0 10px hsl(0, 0%, 20%);
}

.active > h2 {
    font-size: 2.5rem;
    color: white;
}
</style>