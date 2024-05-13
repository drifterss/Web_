var that

class Tab{
    constructor(id){
        that = this
        this.main = document.querySelector(id)
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')

        this.ul = that.main.querySelector('.fisrstnav ul:first-child')
        this.fssection = this.main.querySelector('.tabscon')

        // 获取加号按钮
        this.add = this.main.querySelector('.tabadd')

        this.init()
    }

    init(){
        that.updateLi()
        // 给加号按钮绑定点击事件
        this.add.onclick = this.addTab

        for(var i = 0;i < this.lis.length;i++){
            // 给每一个 li 添加一个属性 index
            this.lis[i].index = i
            this.lis[i].onclick = this.toggleTab

            this.removes[i].onclick = this.removeTab
            this.spans[i].ondblclick = this.editTab
            this.sections[i].ondblclick = this.editTab;
        }
    }
    // 获取所有的 li 和 section
    updateLi(){
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')

        this.removes = this.main.querySelectorAll('.icon-guanbi')

        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child')
    }

    // 切换
    toggleTab(){
        that.clearClass()

        this.className = 'liactive'
        that.sections[this.index].className = 'conactive'
    }
    clearClass(){
        for(var i = 0;i < this.lis.length;i++){
            this.lis[i].className = ''
            this.sections[i].className = ''
        }
    }

    addTab(){
        var random = Math.random()
        that.clearClass()
        // alert(11)
        // 1. 添加 li 元素
        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>'
        var section = '<section class="conactive">测试'+random+'</section>'
        // 2. 把 li 元素添加到ul中
        that.ul.insertAdjacentHTML('beforeend',li)
        that.fssection.insertAdjacentHTML('beforeend',section)

        // 重新为添加后的元素 增加绑定事件
        that.init()
    }

    removeTab(e){
        e.stopPropagation();    // 因为子元素与父元素都有点击事件，所有阻止冒泡的产生
        var index = this.parentNode.index
        console.log(index);

        // 根据索引号删除对应的 li 和 section，remove()可以删除指定元素
        that.lis[index].remove()
        that.sections[index].remove()
        that.init()

        // 当我们删除的不是选中的 li,原来选中的 li 保持不变
        if(document.querySelector('.liactive')) return

        // 当我们删除了这个 li 的时候，让它的前一个 li 处于选定状态
        index--
        that.lis[index] && that.lis[index].click()
    }

    editTab(){
        var str = this.innerHTML;
        // 双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        // alert(11);
        this.innerHTML = '<input type="text" />';
        var input = this.children[0];
        input.value = str;
        input.select(); // 文本框里面的文字处于选定状态
        // 当我们离开文本框就把文本框里面的值给span 
        input.onblur = function() {
            this.parentNode.innerHTML = this.value;
        };
        // 按下回车也可以把文本框里面的值给span
        input.onkeyup = function(e) {
            if (e.keyCode === 13) {
                // 手动调用表单失去焦点事件  不需要鼠标离开操作
                this.blur();
            }
        }
    }


}
var tab = new Tab('#tab')
