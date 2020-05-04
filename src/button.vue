<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <g-icon v-if="icon&&!loading" :name="icon" ></g-icon>
        <g-icon class="loading icon" v-if="loading" name="loading" ></g-icon>
        <div class="content">
            <slot/>
        </div>
    </button>
</template>

<script>
import Icon from './icon'
    export default {
        name:'Button',
        components:{'g-icon':Icon},
        props:{
            icon:{},
            loading:{
                type:Boolean,
                default:false
            },
            iconPosition:{
                type:String,
                default:'left',
                validator (value) {
                    return value === 'left' || value === 'right'
                 }
            }
        }
        

    }

</script>

<style scoped lang="scss">
@keyframes spin {
   0%{transform: rotate(0)};
   100%{transform:rotate(360deg)} 
}
    .loading{
        animation: spin 1.5s infinite linear; 
    }

    .g-button{
        font-size: var(--font-size); 
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;justify-content:center;align-items:center;
        vertical-align: middle;
        > .content{
                order:2
            }
        > .icon{
            order:1;margin-right: .1em;margin-left: 0
        }
        &:hover{
            border-color: #666;
        }
        &:active{
            background-color: #eee;
        }
        &:focus{
            outline: none;
        }
        &.icon-right{

            > .content{
                order:1
            }
            > .icon{
                order:2;margin-right: 0;margin-left: .1em
            }
        }
    }

</style>