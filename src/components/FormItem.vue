<script>

export default {
    name: "FormItem",
    props: ['id'],
    computed: {
        formItem() {
            return this.$store.getters.getItemFromId(Number(this.id));
        }
    }
}
</script>