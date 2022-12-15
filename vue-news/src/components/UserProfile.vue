<template>
   <div class="user-container">
        <div>
            <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
            <slot name="username"></slot>
            <div class="time">
                <slot name="time"></slot>
            </div> 
            <slot name="karma"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        info: Object
    },
}
</script>

<style scoped>

.user-container {
    display: flex;
    align-items: center;
}
.fa-user {
    font-size: 2.5rem;
}
.user-description {
    padding-left:8px;
}
.time {
    font-size: 0.7rem;
}
</style>