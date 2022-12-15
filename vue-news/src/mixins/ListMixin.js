import bus from '../utils/bus.js'
export default {
    // 재사용할 컴포넌트 옵션
    created() {
    bus.$emit('start:spinner');
    this.$store.dispatch('FETCH_NEWS')
    .then(() => {
        console.log('fetched');
        bus.$emit('end:spinner');
    })
    .catch((error) => {
        console.log(error);
    });
    }
}