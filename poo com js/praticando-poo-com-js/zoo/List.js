var collection = [];

export default class List{
    
    List(capacity) {
        if (capacity != null) {
            collection[capacity];
        }
    }

    GetItem = function (index) {
        if (index <= collection.length - 1) {
            return collection[index];
        }
        else {
            throw "Index was out of range. Must be non-negative and less tha";
        }
    }

    SetItem = (index, item) => {
        if (index <= collection.length - 1) {
            collection[index] = item;
        }
        else {
            throw "Index was out of range. Must be non-negative an";
        }
    }

    Add = function (item) {
        collection[collection.length] = item;
    }

    AddRange = function (items) {
        for (var i = 0; i < items.Count(); i++) {
          collection[collection.length] = items.GetItem(i);
        }
    }

    Insert = function (pos, item) {
        if (pos <= collection.length - 1) {
            collection.splice(pos, 0, item);
        }
        else {
            console.log("Index must be within the bounds of the List"); 
        }
    }

    Clear = function () {
        collection = [];
    }

    Count = function () {
        return collection.length;
    }

    Equal = function (x, y) {
        return (x === y);
    }

    Find = function (obj) {
        var index = -1;
          for (var i = 0; i < collection.length; i++) {
              var item = collection[i];
      
              if (this.Equal(item, obj)) {
                   index = i;
              }
          }
      
        return index;
    }

    Exists = function (obj) {
        var isFind = false;
        if (this.Find(obj) > -1) {
          isFind = true;
        }
      
        return isFind;
    }

    ForEach = function (action) {
        for (var i = 0; i < collection.length; i++) {
          var item = collection[i];
      
          action(item);
        }
    }

    RemoveAt = function (index) {
        collection.splice(index, 1);
    }

    RemoveRange = function (index, count) {
        collection.splice(index, count);
    }

    GetRange = function (index, count) {
        newList = new List();
      
        var indexCount = 0;
      
          for (var i = index; i < collection.length; i++) {
              var item = collection[i];
      
              if (indexCount < count) {
                  newList.Add(item);
              }
              else {
                  break;
              }
      
              indexCount++;
          }
      
          return newList;
    }

    teste(){
        console.log("funcionou o export e import")
    }
};