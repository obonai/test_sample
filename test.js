var current_month = 1;

var before_number_of_pairs  = 0;
var current_number_of_pairs = 1;

var next_number_of_pairs = function(){
  return current_number_of_pairs + before_number_of_pairs; };

var update_field_moneth = function(){
  var next = next_number_of_pairs();
  before_number_of_pairs  = current_number_of_pairs;
  current_number_of_pairs = next;
  current_month = current_month + 1;
};

var print_field_state = function(){
  console.log(
    "�����͍� " + current_month + " �����ځA" +
    "�������̃y�A�[�� " + current_number_of_pairs + " �g����I");
};