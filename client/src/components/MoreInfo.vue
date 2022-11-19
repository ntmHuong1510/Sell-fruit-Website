<template>
    <div class="container">
        <div class="item">
            <img src="https://demo.fieldthemes.com/ps-fami/store/modules/ftchtmlblock/images/img10.png">
            <div class="text_content">
                <h3>new collection</h3>
                <h4>from 20$</h4>
            </div>
        </div>
        <div class="item">
            <img src="https://demo.fieldthemes.com/ps-fami/store/modules/ftchtmlblock/images/img7.png">
            <div class="text_content">
                <h3>New Collection 2018</h3>
                <h4>organic Design</h4>
            </div>
        </div>
    </div>

</template>
    
<script setup>


</script>
    
<style scoped lang="scss">
.container {
    max-width: 1200px;
    width: 100%;
    display: flex;
    margin: auto;
    justify-content: center;
    gap: 20px;

    .item {
        width: 50%;
        position: relative;
        cursor: pointer;

        img {
            transition: all .4s ease-in-out;
        }

        &:hover {
            img {
                -webkit-transform: rotateY(-180deg);
                opacity: .7;
            }

            .text_content {
                right: 30px;
                left: auto;
                text-align: right;
            }


        }

        .text_content {
            position: absolute;
            top: 90px;
            left: 30px;
            right: auto;
            text-align: left;
            transition: all .4s ease-in-out;

            h3 {
                font-size: 24px;
                text-transform: uppercase;
                color: #333;
                margin-bottom: 8px;
            }

            h4 {
                font-size: 18px;
                text-transform: uppercase;
                color: #666;
                margin: 0;
            }
        }

        img {
            width: 100%;
        }
    }
}
</style>
    