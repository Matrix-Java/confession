document.addEventListener('DOMContentLoaded', function() {
  // 初始化动态按钮功能
  let clickCount = 0;
  const originalNoButton = document.getElementById('no');
  const closeBtn = document.getElementById('closeBtn');

  // 同意按钮处理
  document.getElementById('yes').addEventListener('click', function() {
    document.querySelector('.main').style.display = 'none';
    document.querySelector('.message').style.display = 'flex';
  });

  // 关闭窗口功能
  closeBtn.addEventListener('click', function() {
    try {
      window.close();
    } catch(e) {
      alert("请手动返回聊天窗口～");
    }
  });

  // 禁止右键菜单
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  // 动态按钮生成逻辑
  originalNoButton.addEventListener('click', function() {
    clickCount++;
    const newButton = document.createElement('button');
    newButton.textContent = `（第${clickCount}次），请公主再考虑一下吧！`;
    newButton.style.backgroundColor = '#e55039';
    newButton.style.position = 'absolute';
    newButton.style.left = Math.random() * (window.innerWidth - 200) + 'px';
    newButton.style.top = Math.random() * (window.innerHeight - 50) + 'px';

    // 事件委托处理
    newButton.addEventListener('click', function() {
      clickCount++;
      originalNoButton.click();
    });

    // 限制最多显示5个按钮
    if(document.querySelectorAll('button').length < 1002) {
      document.body.appendChild(newButton);
    }

    // 原始按钮位置变化
    originalNoButton.style.position = 'absolute';
    originalNoButton.style.left = Math.random() * (window.innerWidth - 200) + 'px';
    originalNoButton.style.top = Math.random() * (window.innerHeight - 50) + 'px';
  });
});
