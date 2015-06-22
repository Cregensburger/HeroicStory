require 'test_helper'

class GenderControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
