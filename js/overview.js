//هاذي الدالة تعمل رفريش للصفحة للتاكد ان جميع البيانات الموجودة في التخزين المحلي موجود في الصفحة 
function refreshOverview(){
  const tbl = document.getElementById('items-table'); 
  if(!tbl) return;

  const list = JSON.parse(localStorage.getItem('projects')||'[]'); 
  const tbody = tbl.querySelector('tbody'); 
  tbody.innerHTML='';

  list.forEach((p, index) => { 
    const tr = document.createElement('tr'); 
    tr.innerHTML = `
      <td>${p.name}</td>
      <td>${p.type || ''}</td>
      <td>${p.price || ''}</td>
      <td class='controls'>
        <button class="btn" onclick='editItem(${index})' >Edit</button>
        <button class="btn" onclick='deleteItem(${index})'>Delete</button>
      </td>`;
    tbody.appendChild(tr); 
  });
}
//هاذي الدالة لحذف العنصر 
//با تستدعي البيانات الي في التخزين المحلي زتحذف منها ثم تعمل رفريش 
function deleteItem(index){ 
  if(!confirm('Confirm delete?')) return; 
  let list = JSON.parse(localStorage.getItem('projects')||'[]'); 
  list.splice(index, 1);   
  localStorage.setItem('projects', JSON.stringify(list)); 
  refreshOverview(); 
  showToast('Deleted'); 
}
//هاذي الدالة للتعديل بحيث تفتح موديل وند الانتها تضهر رسالة وتحدث الحفحة 
function editItem(index){ 
  let list = JSON.parse(localStorage.getItem('projects')||'[]'); 
  const p = list[index]; 
  if(!p){ showToast('Not found'); return; } 

  openModal(`<h3>Edit Project</h3>
    <div class='form-row'><label>Name</label><input id='edit-name' value='${p.name}'></div>
    <div class='form-row'><label>Type</label><input id='edit-type' value='${p.type||''}'></div>
    <div class='form-row'><label>Price</label><input id='edit-price' value='${p.price||''}'></div>
    <div style='text-align:right'>
      <button onclick='saveEdit(${index})'>Save</button> 
      <button onclick='closeModal()'>Cancel</button>
    </div>`); 
}
//هاذي دالة لحفض التعديلات وتتاكد من المدخلات 
function saveEdit(index){ 
  const name = document.getElementById('edit-name').value.trim(); 
  const type = document.getElementById('edit-type').value.trim(); 
  const price = document.getElementById('edit-price').value.trim(); 

  if(!name){ 
    showToast('Invalid values'); 
    return; 
  } 

  let list = JSON.parse(localStorage.getItem('projects')||'[]'); 
  if(index < 0 || index >= list.length){ 
    showToast('Not found'); 
    closeModal(); 
    return; 
  }

  list[index].name = name; 
  list[index].type = type; 
  list[index].price = price; 

  localStorage.setItem('projects', JSON.stringify(list)); 
  closeModal(); 
  refreshOverview(); 
  showToast('Saved'); 
}

document.addEventListener('DOMContentLoaded', refreshOverview);
