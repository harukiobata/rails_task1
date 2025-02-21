class Post < ApplicationRecord
    validates :title, presence: true, length: {maximum: 20 }
    validates :start_date, presence: true
    validates :end_date, presence: true
    validates :schedule_memo, length: {maximum: 500 }
    validate  :end_date_is_not_before_start_date

    private

    def end_date_is_not_before_start_date
        if end_date.present? && start_date.present? && end_date < start_date
            errors.add(:end_date, "は開始日より後の日付でなければなりません")
        end
    end
end
